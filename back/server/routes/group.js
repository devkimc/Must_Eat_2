import { Router } from 'express';
import { getConnection } from '../app';

const router = Router();

/*
    그룹 생성하기 : POST /group/create
*/
router.post('/create', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        /* 그룹 생성 */
        conn.query(
            ' INSERT INTO USER_GROUP ' +
                ' (CRT_USER_ID, GROUP_NM, CRT_DTM) ' +
                '  VALUES (?, ?, SYSDATE()) ',
            [req.session.user, req.body.GROUP_NM],
            err => {
                if (err) throw err;

                /* 채번 조회 */
                conn.query(
                    'SELECT LAST_INSERT_ID() AS LAST_ID',
                    (err2, result2) => {
                        if (err2) throw err2;

                        /* 그룹 멤버 추가 */
                        conn.query(
                            ' INSERT INTO GROUP_MEMBER ' +
                                ' (GROUP_ID, USER_ID) ' +
                                '  VALUES (?, ?) ',
                            [result2[0].LAST_ID, req.session.user],
                            err3 => {
                                if (err3) throw err3;

                                return res.status(200).json({
                                    success: true,
                                    result: true,
                                });
                            },
                        );
                    },
                );
            },
        );
        conn.release();
    });
});

/*
    그룹 리스트 조회: GET /group/list
*/
router.get('/list', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' SELECT T02.GROUP_ID                 ' +
                '      , T02.GROUP_NM                 ' +
                '   FROM GROUP_MEMBER T01             ' +
                '      ,   USER_GROUP T02             ' +
                '  WHERE T01.USER_ID = ?              ' +
                '    AND T01.GROUP_ID = T02.GROUP_ID  ',
            [req.session.user],
            (err, result) => {
                if (err) throw err;

                return res.status(200).json({
                    success: true,
                    result,
                });
            },
        );
        conn.release();
    });
});

/*
    그룹에 초대하기 : POST /group/invite
*/
router.post('/invite', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' SELECT USER_ID     ' +
                '   FROM USER        ' +
                '  WHERE USER_ID = ? ',
            [req.body.RECV_USER_ID],
            (err, result) => {
                if (err) throw err;

                if (result.length === 0) {
                    return res.status(400).json({
                        code: 40001,
                        msg: '존재하지 않는 회원입니다.',
                    });
                }

                conn.query(
                    ' SELECT GROUP_ID     ' +
                        '   FROM GROUP_MEMBER ' +
                        '  WHERE GROUP_ID = ? ' +
                        '    AND USER_ID  = ? ',
                    [req.body.GROUP_ID, req.body.RECV_USER_ID],
                    (err2, result2) => {
                        if (err2) throw err2;
                        if (result2.length >= 1) {
                            return res.status(400).json({
                                code: 40002,
                                msg: '그룹 내 이미 사용자가 존재합니다.',
                            });
                        }

                        conn.query(
                            ' SELECT GROUP_ID     ' +
                                '   FROM GROUP_MEMBER ' +
                                '  WHERE GROUP_ID = ? ' +
                                '    AND USER_ID  = ? ',
                            [req.body.GROUP_ID, req.session.user],
                            (err3, result3) => {
                                if (err3) throw err3;

                                if (result3.length === 0) {
                                    return res.status(401).json({
                                        code: 40000,
                                        msg: '해당 기능의 권한이 없습니다.',
                                    });
                                }

                                conn.query(
                                    ' INSERT INTO GROUP_INVITE ' +
                                        ' (GROUP_ID, SEND_USER_ID, RECV_USER_ID, RES_STATUS, CRT_DTM) ' +
                                        '  VALUES (?, ?, ?, "REQ", SYSDATE()) ',
                                    [
                                        req.body.GROUP_ID,
                                        req.session.user,
                                        req.body.RECV_USER_ID,
                                    ],
                                    err4 => {
                                        if (err4) throw err4;

                                        return res.status(200).json({
                                            success: true,
                                            result: true,
                                        });
                                    },
                                );
                            },
                        );
                    },
                );
            },
        );

        conn.release();
    });
});

/*
    초대를 처리하지 않은 수 조회 : GET /group/invite/not-proc/count
*/
router.get('/invite/not-proc/count', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' SELECT COUNT(*) AS count       ' +
                '   FROM GROUP_INVITE T01        ' +
                '  WHERE T01.RECV_USER_ID = ?    ' +
                '    AND T01.RES_STATUS = "REQ"  ',
            [req.session.user],
            (err, result) => {
                if (err) throw err;

                return res.status(200).json({
                    success: true,
                    result,
                });
            },
        );
        conn.release();
    });
});

/*
    그룹 초대 리스트 조회 : GET /group/invite/list
*/
router.get('/invite/list', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' SELECT T01.INVITE_ID                        ' +
                '      , T01.GROUP_ID                     ' +
                '      , T02.GROUP_NM                     ' +
                '      , T01.SEND_USER_ID                 ' +
                '      , T01.RECV_USER_ID                 ' +
                '   FROM GROUP_INVITE T01                 ' +
                '      , USER_GROUP T02                   ' +
                '  WHERE T01.RECV_USER_ID = ?             ' +
                '    AND T01.GROUP_ID     = T02.GROUP_ID  ' +
                '    AND T01.RES_STATUS   = "REQ"         ',
            [req.session.user],
            (err, result) => {
                if (err) throw err;

                return res.status(200).json({
                    success: true,
                    result,
                });
            },
        );
        conn.release();
    });
});

/*
    그룹 초대 수락 : POST /group/invite/accept
*/
router.post('/invite/accept', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        /* 유효한 초대내역인지 체크 */
        conn.query(
            ' SELECT GROUP_ID                 ' +
                '   FROM GROUP_INVITE T01         ' +
                '  WHERE T01.INVITE_ID    = ?     ' +
                '    AND T01.RECV_USER_ID = ?     ' +
                '    AND T01.RES_STATUS   = "REQ" ',
            [req.body.INVITE_ID, req.session.user],
            (err, result) => {
                if (err) throw err;

                const groupId = result[0].GROUP_ID;

                /* 그룹 멤버 테이블에 등록 */
                conn.query(
                    ' INSERT INTO GROUP_MEMBER ' +
                        ' (GROUP_ID, USER_ID)      ' +
                        '  VALUES (?, ?) ',
                    [groupId, req.session.user],
                    err2 => {
                        if (err2) throw err2;

                        /* 초대 내역 상태 변경 */
                        conn.query(
                            ' UPDATE GROUP_INVITE T01             ' +
                                '    SET T01.RES_STATUS   = "ACP"     ' +
                                '      , T01.RES_DTM      = SYSDATE() ' +
                                '  WHERE T01.INVITE_ID    = ?         ' +
                                '    AND T01.RECV_USER_ID = ?         ' +
                                '    AND T01.RES_STATUS   = "REQ"     ',
                            [req.body.INVITE_ID, req.session.user],
                            err3 => {
                                if (err3) throw err3;

                                return res.status(200).json({
                                    success: true,
                                    result: true,
                                });
                            },
                        );
                    },
                );
            },
        );
        conn.release();
    });
});

/*
    그룹 초대 거절 : POST /group/invite/not-accept
*/
router.post('/invite/not-accept', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' UPDATE GROUP_INVITE T01             ' +
                '    SET T01.RES_STATUS   = "REJ"     ' +
                '      , T01.RES_DTM      = SYSDATE() ' +
                '  WHERE T01.INVITE_ID    = ?         ' +
                '    AND T01.RECV_USER_ID = ?         ' +
                '    AND T01.RES_STATUS   = "REQ"     ',
            [req.body.INVITE_ID, req.session.user],
            err => {
                if (err) throw err;

                return res.status(200).json({
                    success: true,
                    result: true,
                });
            },
        );
        conn.release();
    });
});

export default router;
