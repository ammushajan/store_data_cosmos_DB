module.exports = async function (context, req) {
  

  const clickeditems = require("./clickeditems");
  // To check if the user clicked on post,project and course
  let clicked = clickeditems.clicked;
  var checkclickedITems = ["Post", "Project", "Course"];
  // To check if the clicked item is post ,project and course
  var checked = checkclickedITems.includes(clickeditems.type);
  console.log(clickeditems);
  if (req.query.Type && req.query.ItemId && req.query.ListId&& clicked &&checked) {
    // Set the output binding data from the query object.
    context.bindings.toDoItem = req.query;

    // Success.
    context.res = {
      status: 200,
      body: "Value has been stored to the database",
    };
  } else {
    context.res = {
      status: 400,
      body: "The query options 'Type','ItemId' and 'ListId' are required.",
    };
  }
};
