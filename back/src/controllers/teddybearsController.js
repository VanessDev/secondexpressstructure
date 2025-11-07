const teddybears = [
  { id: 1, size: 120, color: "purple", cuteness: "high" },
  { id: 2, size: 80, color: "black and white", cuteness: "medium" },
  { id: 3, size: 30, color: "blue", cuteness: "low" },
  { id: 4, size: 150, color: "pink", cuteness: "very high" },
];

//read

exports.listTeddybears = (req, res) => {
  res.status(200).json({
    success: true,
    message: "liste des nounours",
    data: teddybears,
  });
};

//logique d'affiche d'un nounours

exports.getTeddybearById = (req, res) => {
  const id = Number(req.params.id);
  const teddybear = teddybears.find((t) => t.id === id);

  

  if (!teddybear) {
    res.status(404).json({
      success: false,
      message: "teddybear not found",
      data: null,
    });
}

    res.status(200).json({
      success: true,
      message: "teddybear found",
      data: teddybear,
    });
    
};

//create
exports.createTeddybear = (req, res) => {
    const { size, color, cuteness } = req.body;

if (!size || !color || !cuteness ||
    typeof size !== "number" ||
    typeof color !== "string" ||
    typeof cuteness !== "string"
) {
    res.status(400).json({
        success: false,
        message:" size color cuteness obligatoire",
        data: null,
    });
}
 const newTeddybear = { id: teddybearID++, size,color, cuteness };
 teddybears.push(newTeddybear);
 res.status(201).json({
    success:false,
    message:"teddybear created",
    data: newTeddybear,
 });

}
