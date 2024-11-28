import zod from "zod";
import express from "express";

const app = express();

const userProfileSchema = zod.object({
    name: zod.string().min(1, {message: "Name can't be empty"}),
    email: zod.string().email({message: "Invalid email format"}),
    age: zod.number().min(18, {message: "You must be at least 18 years old"}).optional()
})

app.put("/user",(req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body; // how to assign a  type to req.body

    if(!success){
        res.status(411).json({});
    };

    //update database here
    res.json({
        message: "User Updated"
    });

});

app.listen(3000, () => {
    console.log("port is listening at 3000");
})