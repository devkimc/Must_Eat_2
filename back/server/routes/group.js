import { getConnection } from '../app'
import { Router } from 'express';
const router = Router()

/*
    INSERT USER_GROUP: POST /group/create
*/
router.post('/create', (req, res) => {
  getConnection((conn) => {
    if(req.session.user === undefined) {
      return res.status(401).json({
        code: 20001,
        msg: "로그인후 사용가능합니다."
      })
    }

    /* 그룹 생성 */
    conn.query(
      ' INSERT INTO USER_GROUP ' +                    
      ' (CRT_USER_ID, GROUP_NM, CRT_DTM) ' +
      '  VALUES (?, ?, SYSDATE()) ' ,
      [ req.session.user
      , req.body.GROUP_NM ] ,
      (err) => {
        if (err) throw err

        /* 채번 조회 */
        conn.query(
            'SELECT LAST_INSERT_ID() AS LAST_ID',
            (err2, result2) => {
				if (err2) throw err2

                /* 그룹 멤버 추가 */
                conn.query(
                    ' INSERT INTO GROUP_MEMBER ' +                    
                    ' (GROUP_ID, USER_ID) ' +
                    '  VALUES (?, ?) ' ,
                    [ result2[0].LAST_ID
                    , req.session.user ] ,
                    (err3) => {
                        if (err3) throw err3

                        return res.status(200).json({
                          code: 10000,
                          msg: "정상 처리되었습니다.",
                          list:""
                        })
                    }
                )
            }
        )
      }
    )
    conn.release()
  })
})

/*
    SELECT USER_GROUP: GET /group/list
*/
router.get('/list', (req, res) => {

    getConnection((conn) => {
        if(req.session.user === undefined) {
            return res.status(401).json({
              code: 20001,
              msg: "로그인후 사용가능합니다."
            })
        }

        conn.query(
            ' SELECT T02.GROUP_ID                 ' +
            '      , T02.GROUP_NM                 ' +
            '   FROM GROUP_MEMBER T01             ' +
            '      ,   USER_GROUP T02             ' +
            '  WHERE T01.USER_ID = ?              ' +
            '    AND T01.GROUP_ID = T02.GROUP_ID  ' ,
            [ req.session.user ],
            (err, result) => {
                if (err) throw err

                return res.status(200).json({
                    code: 10001,
                    msg: "정상 조회되었습니다.",
                    list: result
                })
            }
        )
    })
})

export default router