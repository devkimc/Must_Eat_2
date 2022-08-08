import { Router } from 'express';
import { getConnection } from '../app';

const router = Router();

/*
    CEATE USER_INFO: POST /auth/signup
*/
router.post('/signup', (req, res) => {
    if (req.body.USER_ID === undefined || req.body.USER_ID === '') {
        return res.status(400).json({
            code: 20002,
            msg: '아이디를 확인하세요.',
            list: '',
        });
    }

    if (req.body.USER_PW === undefined || req.body.USER_PW === '') {
        return res.status(400).json({
            code: 20003,
            msg: '비밀번호를 확인하세요.',
            list: '',
        });
    }

    getConnection(conn => {
        // 아이디 중복 검사
        conn.query(
            ' SELECT USER_ID     ' +
                '   FROM USER        ' +
                '  WHERE USER_ID = ? ',
            [req.body.USER_ID],
            (err, result) => {
                if (err) throw err;
                if (result.length !== 0) {
                    return res.status(400).json({
                        code: 20004,
                        msg: '존재하는 아이디입니다. 다른 아이디를 입력해주세요.',
                        list: '',
                    });
                }

                // 회원가입 처리
                conn.query(
                    ' INSERT INTO USER ' +
                        ' (USER_ID, USER_PW, USER_EMAIL, MOB_NO, CRT_DTM) ' +
                        '  VALUES (?, ?, ?, ?, SYSDATE()) ',
                    [
                        req.body.USER_ID,
                        req.body.USER_PW,
                        req.body.USER_EMAIL,
                        req.body.MOB_NO,
                    ],
                    (err2, result2) => {
                        if (err2) throw err2;

                        if (result2.length !== 0) {
                            return res.status(200).json({
                                code: 20005,
                                msg: '회원가입에 성공하셨습니다. 로그인 후 서비스 이용 가능합니다.',
                                list: '',
                            });
                        }
                    },
                );
            },
        );
        conn.release();
    });
});

/*
    CHECK USER_INFO: POST /auth/login
*/
router.post('/login', (req, res) => {
    getConnection(conn => {
        conn.query(
            ' SELECT USER_ID     ' +
                '   FROM USER        ' +
                '  WHERE USER_ID = ? ' +
                '    AND USER_PW = ? ',
            [req.body.USER_ID, req.body.USER_PW],
            (err, result) => {
                if (err) throw err;

                if (result.length === 0) {
                    return res.status(400).json({
                        code: 20000,
                        msg: '아이디와 패스워드를 확인하세요',
                        list: result,
                    });
                }

                if (result.length === 1) {
                    req.session.user = req.body.USER_ID;
                    req.session.resetMaxAge();
                    console.log(req.sessionID);
                    return res.status(200).json({
                        code: 20001,
                        msg: '로그인에 성공하셨습니다.',
                    });
                }

                return res.status(500).json({
                    code: 99999,
                    msg: 'Server Error.',
                    list: result,
                });
            },
        );
        conn.release();
    });
});

export default router;
