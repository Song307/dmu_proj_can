import './Login.css'

function Login(){
    return(
        <div className="Login">
            
            <div className='box'>
                로그인 : <input type='text'></input> <br/>
                비밀번호 : <input type='password'></input> <br/>
                <a href='#'>회원가입</a><button>로그인</button>
            </div>
            
        </div>
    )
}

export default Login;