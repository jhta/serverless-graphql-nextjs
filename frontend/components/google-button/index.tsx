
const GoogleButton = ({ onClick }: any) => (
  <div onClick={onClick} className="google-btn">
    <div className="google-icon-wrapper">
      <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </div>
    <p className="btn-text"><b>Sign in with Google</b></p>
  </div>
)

export default GoogleButton