

export default function handler(req, res) {
    const { query: { id } } = req
    console.log(req)
    res.status(200).json({ userId: id })
}
