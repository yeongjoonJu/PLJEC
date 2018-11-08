 
const nodemailer = require('nodemailer');
 
// Generate test SMTP service account from ethereal.email
class MyMailer{
    static async sendGoogle(toEmail){
        let transporter = nodemailer.createTransport({
            //service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: 'go1217jo@gmail.com',
                clientId: '160091643102-lsg9a2qkjnlv54bnuedv27lgv1mjgb73.apps.googleusercontent.com',
                clientSecret: 'zmMA3fTlpVNxlCnsS3ftQM2K',
                refreshToken: '1/cusaajYppnULtBXMZcG4cyKKsbEVOQTcOeOjZoj8Pzo',
                accessToken: 'ya29.GltOBqcv5pf_4OIHhN_qkJEvWjjGbhkIE7bF2mcKBTk2MNPl3PfeVhv2PHhq44W43NJkG1vLv6IAIhBwtjjQlruAbHmOe94fcPH-3wP_cCc2kuLmy2tII0Ge455F',
                expires: 3600
            }
    
        });
    
        let mailOptions = {
            from:{
                name: 'Pljec',
                address: 'go1217jo@gmail.com'
            }, // sender address
    
            to:
            toEmail
            , // list of receivers
    
            subject: "본인 확인 메일입니다.", // Subject line
            html: "<p>i am nodemailer &#128522; &#128522;</p>" // html body
        };
    
        await transporter.sendMail(mailOptions, (error, info) => {
            console.log(error,info)
        });
    }
}
 
export default MyMailer;