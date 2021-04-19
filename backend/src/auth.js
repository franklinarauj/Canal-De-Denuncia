const LocalStrategy = require('passport-local').Strategy;
const loginController = require('./controller/loginController');

module.exports = function (passport) {
    // passport.serializeUser((user, done) => done(null, user.email));

    // passport.deserializeUser((email, done) => {
    //     try {
    //         loginController.getUsuarioByEmail(email).then(user => done(null, user))
    //     } catch {
    //         return done(null, false)
    //     }
    // });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
    },
        function (email, senha, done) {
            console.log(email, senha);
            try {
                loginController.getUsuarioByEmail(email).then(user => {
                    console.log(user);
                    if (!user) {
                        console.log("Usuário não existe")
                        return done(null, false, { message: "Usuário não existe" });
                    } else {
                        if(senha == user.senha) {
                            console.log("Login realizado");
                            return done(null, user);
                        } else {
                            console.log("Senha errada");
                            return done(null, false, { message: "Senha incorreta" });
                        }
                    }
                });
            } catch (error) {
                console.log(error);
                return done(null, false, { message: "Usuário não encontrada" });
            }
        }
    ));
}