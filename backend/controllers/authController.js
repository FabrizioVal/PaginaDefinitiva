// BACK END FUNCTIONS van a estar aca (login, register)
// estas funciones reciben, por lo que tengo entendido, variables desde el front end
//Basicamente, son los endpoints del backend para recibir frontend
// creo que desde aca respondo con codigos (404, 505, etc) que son recibidos por front end

//probar con postman que aca se reciban y procesen los datos
// postman despues se reemplaza con la UI del cliente

const User = require('../models/user')

// inicio de sesion

const login = async (req, res) => { 

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email, password });

        if (!user) {
            console.log(`user haves invalid credentials`);
            console.log(user)
            return res.status(404).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        console.log(`user compared successfully`);

        return res.status(200).json({
            success: true,
            message: 'Sign-in successful'
        });

    } catch (error) {
        console.log(`An error has ocurred`);
        return res.status(500).json({
            success: false,
            message: 'An error occurred'
        });
    }

}

// registro cuenta nueva

const register = async (req, res = response) => {
    try {
        const { username, email, password } = req.body

        let user = await User.findOne({ email });

        if (user) {
            console.log('User already exists:', user);
            return res.status(400).json({
                success: false,
                message: 'A user already exists with this email'
            })
        }
        
        user = new User({username, email, password});
        console.log('New User Object:', user);
    

        //encriptar contraseña
        // const salt = bcrypt.genSaltSync();
        // user.password = bcrypt.hashSync(password, salt)

        await user.save();
        console.log('User Saved:', user);

        //generar jwt
        //const token = await generateJwt(user.id, user.name)

        //res.status(201).json({
         //   ok: true,
          //  uid: user.id,
          //  name: user.name,
          //  token,
        // })

        // Ver el tema de la encripcion

        return res.status(201).json({
            success: true,
            message: 'Registration successful',
          });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: 'An error ocurred',
        })
    }
}

// exportacion de modulos

module.exports = {
    login,
    register,
}