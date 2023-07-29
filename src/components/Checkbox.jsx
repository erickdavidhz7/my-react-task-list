const Checkbox = (props) =>{
    const{onChange, defaultChecked} = props;
    return(<>
        <label className="toggler-wrapper style-1">
        <input  type="checkbox" onChange={onChange} defaultChecked={defaultChecked}/>
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>
      </>
    )
} 


export default Checkbox;