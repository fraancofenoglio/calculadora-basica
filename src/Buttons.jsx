const Buttons = ({children, id, classname, setValue, value, setclickEqual, clickEqual}) => {

  return (
    <button className={classname} id={id} onClick={() => {

        console.log(clickEqual)

        if (id === "=") {
            setclickEqual(true)
            setValue(eval(value))

        } else if (id === "AC"){
            setValue("")

        } else if (id === "delete") {
            setValue(value.slice(0, -1))

        }else if(classname === "operator"){
            
            setValue(value += id)
            setclickEqual(false)
        } else {
            if (clickEqual) {
                setValue("")
                setclickEqual(false)
                setValue(id)

            }else {
                setclickEqual(false)
                setValue(value += id)
            }
        }
    }}>
        {children}
    </button>
  )
}

export default Buttons