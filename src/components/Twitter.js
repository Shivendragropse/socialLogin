import React,{Component} from 'react';
// import GoogleLogin from 'react-google-login';
import { OldSocialLogin as SocialLogin } from 'react-social-login'


class Twitter extends Component {

    state = {
        isLoggedIn : false,
        id : '',
        name: '',
        email: '',
    }

    handleSocialLogin = (user, err) =>{
        console.log('rrrrrrrrrrrrrrrrr',user._profile);
        
        // this.setState({
        //     isLoggedIn: true,
        //     id : user._profile.id,
        //     email : user._profile.email,
        //     name : user._profile.name
        // })
    }


    render (){
        console.log('ssssssssssss',this.state);
        let googleContent;

        if(this.state.isLoggedIn){
            googleContent = (
                <div>
                    {/* <h2>Welcome {this.state.name}</h2>
                    Email : {this.state.email} */}
                </div>
            );
        }else{
            googleContent = (<SocialLogin
                  provider='twitter'
                  appId='16576557'
                  callback={this.handleSocialLogin}
                >
                  <button>Login with Twitter</button>
                </SocialLogin>
          );
        }

        return(
            <div>
                {googleContent}
            </div>
        )
    }
}

export default Twitter;