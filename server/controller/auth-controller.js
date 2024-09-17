// Home page logic



const home = async (req, res) =>{
    try {
        res
        .status(200)
        .send('Welcome to home using controller')
    } catch (error) {
        console.error(error);
        
    }
}

const register = async (req, res) => {

    try {
        console.log(req.body);
        
        res
        .status(200)
        .json({message: req.body});
        
    } catch (error) {
        console.error("messgae: " , error);
        
    }




}

module.exports = {home, register}