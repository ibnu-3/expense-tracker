
import Income from "../models/Income.js";

export const addIncome = async (req, res) => {
  const { icon, source, amount, date } = req.body;
  try {
    const income = await Income.create({
      icon,
      source,
      amount: parseFloat(amount),
      date,
    });
    res.status(200).json({message:"income created Successfully",income});
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};

//get all
export const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({}).sort({ createdAt: -1 });
    if (!incomes) {
      return res.status(404).json({ message: "income not found" });
    }
    res.status(201).json( incomes);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
//get one
export const getIncome = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income) {
      return res.status(404).json({ message: "income not found" });
    }
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
//
export const updateIncome = async (req, res) => {
  const { icon, source, amount, date } = req.body;
  try {
    const income = await Income.findById(req.params.id);
    if (!income) {
      return res.status(404).json({ message: "income not found" });
    }
    income.icon= icon || income.icon;
    income.source= source || income.source;
    income.amount= amount || income.amount;
    income.date= date || income.amount;
    const newincome = await income.save()
    return res.status(201).json({message:'income Updated!',newincome})
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};

//delete income
//get one
export const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income) {
      return res.status(404).json({ message: "income not found" });
    }
    await income.deleteOne()
    res.status(201).json({message:"income deleted!"});
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log(error.message);
  }
};
