import { Router } from 'express';
import { getConnection } from '../app';

const router = Router();

/*
    그룹 맛집 조회: GET /fav-rest/info
*/
router.get('/', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' SELECT T02.REST_ID        as id            ' +
                '      , T02.REST_NM    as place_name    ' +
                '      , T02.FOOD_CATE  as category_name ' +
                '      , T02.LAT_CDNT   as y             ' +
                '      , T02.LNG_CDNT   as x             ' +
                '   FROM GROUP_REST T01                  ' +
                '      ,       REST T02                  ' +
                '  WHERE T01.GROUP_ID = ?                ' +
                '    AND T01.REST_ID = T02.REST_ID       ',
            [req.query.GROUP_ID],
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
    그룹 맛집 추가: POST /fav-rest/add
*/
router.post('/', (req, res) => {
    getConnection(conn => {
        if (req.session.user === undefined) {
            return res.status(401).json({
                code: 20001,
                msg: '로그인후 사용가능합니다.',
            });
        }

        conn.query(
            ' SELECT GROUP_ID     ' +
                '   FROM GROUP_REST   ' +
                '  WHERE GROUP_ID = ? ' +
                '    AND REST_ID  = ? ',
            [req.body.GROUP_ID, req.body.REST_ID],
            (err, result) => {
                if (err) throw err;

                if (result.length >= 1) {
                    return res.status(400).json({
                        code: 40002,
                        msg: '이미 즐겨찾기 목록에 추가된 식당입니다.',
                    });
                }

                conn.query(
                    '  INSERT INTO GROUP_REST ' +
                        ' (GROUP_ID, REST_ID, CRT_DTM) ' +
                        '  VALUES (?, ?, SYSDATE()) ',
                    [req.body.GROUP_ID, req.body.REST_ID],
                    err2 => {
                        if (err2) throw err2;

                        conn.query(
                            ' SELECT EXISTS (               ' +
                                ' SELECT *                  ' +
                                '   FROM REST T01           ' +
                                '  WHERE T01.REST_ID    = ? ' +
                                '  LIMIT 1                  ' +
                                ') AS success               ',
                            [req.body.REST_ID],
                            (err3, result3) => {
                                if (err3) throw err3;

                                if (result3[0].success) {
                                    return res.status(200).json({
                                        success: true,
                                        result: true,
                                    });
                                }

                                conn.query(
                                    '  INSERT INTO REST ' +
                                        ' (REST_ID, REST_NM, FOOD_CATE, LAT_CDNT, LNG_CDNT, CRT_DTM) ' +
                                        '  VALUES (?, ?, ?, ?, ?, SYSDATE()) ',
                                    [
                                        req.body.REST_ID,
                                        req.body.REST_NM,
                                        req.body.FOOD_CATE,
                                        req.body.LAT_CDNT,
                                        req.body.LNG_CDNT,
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
    그룹 맛집 제거: DELETE /fav-rest/delete
*/
router.delete('/', (req, res) => {
    if (req.session.user === undefined) {
        return res.status(401).json({
            code: 20001,
            msg: '로그인후 사용가능합니다.',
        });
    }

    getConnection(conn => {
        conn.query(
            ' DELETE ' +
                '   FROM GROUP_REST    ' +
                '  WHERE GROUP_ID = ?  ' +
                '    AND REST_ID  = ?  ',
            [req.query.GROUP_ID, req.query.REST_ID],
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

/*
    INSERT/DELETE FAVORITES_RESTATURANT: POST /fav-rest/proc
*/
router.post('/proc', (req, res) => {
    getConnection(conn => {
        conn.query(
            ' SELECT REST_ID     ' +
                '   FROM FAVREST     ' +
                '  WHERE USER_ID = ? ' +
                '    AND REST_ID = ? ',
            [req.body.USER_ID, req.body.REST_ID],
            (err, result) => {
                if (err) throw err;

                // 즐겨찾기 추가
                if (req.body.INS_YN === 'Y') {
                    if (result.length >= 1) {
                        return res.status(400).json({
                            code: 40002,
                            msg: '이미 즐겨찾기 목록에 추가된 식당입니다.',
                        });
                    }

                    conn.query(
                        ' SELECT REST_ID     ' +
                            '   FROM REST        ' +
                            '  WHERE REST_ID = ? ',
                        [req.body.REST_ID],
                        (err2, result2) => {
                            if (err2) throw err2;

                            if (result2.length === 0) {
                                // INSER REST_TABLE
                                conn.query(
                                    ' INSERT INTO REST ' +
                                        ' (REST_ID, REST_NM, ADDR, CATE_ID, CATE_NM, LAT_CDNT, LNG_CDNT, CRT_DTM) ' +
                                        '  VALUES (?, ?, ?, ?, ?, ?, ?, SYSDATE()) ',
                                    [
                                        req.body.REST_ID,
                                        req.body.REST_NM,
                                        req.body.ADDR,
                                        req.body.CATE_ID,
                                        req.body.CATE_NM,
                                        req.body.LAT_CDNT,
                                        req.body.LNG_CDNT,
                                    ],
                                    err3 => {
                                        if (err3) throw err3;
                                    },
                                );
                            }
                        },
                    );
                    conn.query(
                        '  INSERT INTO FAVREST         ' +
                            ' (USER_ID, REST_ID, CRT_DTM)  ' +
                            '  VALUES (?, ?, SYSDATE()) ',
                        [req.body.USER_ID, req.body.REST_ID],
                        err2 => {
                            if (err2) throw err2;
                            return res.status(200).json({
                                success: true,
                                result: true,
                            });
                        },
                    );
                }

                // 즐겨찾기 삭제
                else {
                    if (result.length !== 1) {
                        return res.status(400).json({
                            code: 40003,
                            msg: '즐겨찾기 목록에 존재하지 않은 식당입니다.',
                        });
                    }

                    conn.query(
                        ' DELETE             ' +
                            '   FROM FAVREST     ' +
                            '  WHERE USER_ID = ? ' +
                            '    AND REST_ID = ? ',
                        [req.body.USER_ID, req.body.REST_ID],
                        err2 => {
                            if (err2) throw err2;
                            return res.status(200).json({
                                success: true,
                                result: true,
                            });
                        },
                    );
                }
            },
        );
        conn.release();
    });
});

export default router;
