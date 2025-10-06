import React from 'react'


const Signin = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          {/* Left Side: Form */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card p-4 shadow">
              <h2 className="mb-4 text-center ff">Sign in</h2>
              <form>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn color w-100">
                  Sign in
                </button>
              </form>
              <p className="text-center mt-3">
                <a href="/signin">Sign in</a>
                with other{" "}
              </p>

              <div className="signin-container">
                <button className="signin-btn">
                  <img
                    src="/google.png"
                    alt="Google logo"
                    width="20px"
                    height="20px"
                  />
                  Sign in with <b>Google</b>
                </button>
              </div>
              

              {/* Facebook Button */}
              <button className="signin-btn">
                <img
                  src="facebook.png"
                  alt="Facebook logo"
                  height="20px"
                  width="20px"
                />
                Sign in with <b>Facebook</b>
              </button>
            </div>
          </div>
    
          {/* Right Side: Image */}
          <div className="col-12 col-md-6 col-lg-5 login">
            <div className="text-center">
              <img
                src="/signinimg.jpg"
                alt="Shopping"
                className="img-fluid rounded signin"
              
              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;
