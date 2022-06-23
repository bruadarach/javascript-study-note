const { members } = require("../repository/members");
const membersData = members;
let member = [];

const handleRequestBody = (req, res) => {
  if (!req.body) {
    return res.status(400).send("no request body");
  }

  const { title, author, bodyHTML } = req.body;
  if (!title && !author && !bodyHTML) {
    return res.status(400).send("bad request")
  }
  return true;
}

const membersController = {
  findAll: (req, res) => {
    return res.status(200).json(membersData);
  },

  findById: (req, res) => {
    let list = membersData;
    if (req.params) {
      list = list.filter((item)=>{ return item.id === Number(req.params.id)})
      if (list.length > 0) {
        return res.status(200).json(list[0]);
      } else {
        return res.sendStatus(404);
      }
    } 
  },

  createMember: (req, res) => {

    const { title, author, bodyHTML, avatarUrl } = req.body;
    console.log(req.body, req.url)
    if (handleRequestBody(req, res) !== true) return;
    const id = parseInt(Math.random() * 10000)
    const newmember = {
      id,
      name,
      phone,
      email,
      country
    };
    membersData.unshift(newmember);
    return res.status(201).send(`created successfully: ${id}`);
  },

  updateById: (req, res) => {
    if (handleRequestBody(req, res) !== true) return;
    const idx = membersData.findIndex((item) => item.id === Number(req.params.id));
    const updated = { ...membersData[idx], ...req.body };

    if (idx !== -1) { 
      membersData.splice(idx, 1, updated);
      return res.status(200).send("updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },

deleteById: (req, res) => {
  const idx = membersData.findIndex((item) => item.id === Number(req.params.id));
  if (idx !== -1) {
    membersData.splice(idx, 1);
    return res.status(202).send("deleted successfully");
    } else {
    return res.status(404).send("Not found");
    }
  },
};

module.exports = {
  membersController,
};
