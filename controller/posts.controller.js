const pool = require("../database/index")

const postsController = {
  getAll: async (req, res) => {
    try{
      const [rows, fields] = await pool.query("SELECT * FROM blog.posts");
      res.json({
        data: rows
      })
    } catch(error){
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  getById: async (req, res) => {
    try {
      const {id} = req.params
      const [rows, fields] = await pool.query("SELECT * FROM blog.posts WHERE id = ?", [id]);
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: "error"
      })
    }
  },
  create: async (req, res) => {
    try {
      const { title, content } = req.body
      const sql = `INSERT INTO blog.posts (title, content) VALUES (?, ?)`
      const [rows, fields] = await pool.query(sql, [title, content])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: "error"
      })
    }
  },
  update: async (req, res) => {
    try {
      const { title, content } = req.body
      const {id} = req.params
      const sql = `UPDATE blog.posts SET title = ?, content = ? WHERE id = ?`
      const [rows, fields] = await pool.query(sql, [title, content, id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: "error"
      })
    }
  },
  delete: async (req, res) => {
    try {
      const {id} = req.params
      const sql = `DELETE FROM blog.posts WHERE id = ?`
      const [rows, fields] = await pool.query(sql, [id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: "error"
      })
    }
  }
}

module.exports = postsController