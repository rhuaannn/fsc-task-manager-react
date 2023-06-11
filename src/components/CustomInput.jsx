import "./CustomInput.scss"
const CustomInput = () => {
return(
  <div className="custom-input-container">
  <input type="text" className="custom-input" />
  {label ? (
    <label className={`${value.length > 0 ? "shrrink" : ""}custom-input-label`}></label>
  ) : null}
</div>;
)
};

export default CustomInput;
