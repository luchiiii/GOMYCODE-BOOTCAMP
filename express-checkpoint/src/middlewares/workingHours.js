//working hours checking middleware

const isWorkingHours = (req,res,next) => {
    const date = new Date();
    const day = date.getDay(); // 0 - 6 (0 is Sunday)
    const hour = date.getHours(); // 0 - 23


    if(day >=1 && day <= 5 && hour >= 9 && hour <= 17){
        next();
    }else{
        return res.status(403).json({ error: "Sorry, we are closed" });
    }
}


module.exports = isWorkingHours;