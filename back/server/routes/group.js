import { getConnection } from '../app'
import { Router } from 'express';
const router = Router()

/*
    INSERT/DELETE FAVORITES_RESTATURANT: POST /fav-rest/proc
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

export default router