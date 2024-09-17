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

const registration = async (req, res) => {

    try {
        res.status(200).send("welcome to registration page through controller");
        
    } catch (error) {
        console.error("messgae: " , error);
        
    }




}

module.exports = {home, registration}