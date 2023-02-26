const Buttons = ({children, id, classname, setValue, value, setclickEqual, clickEqual}) => {

  return (
    <button className={classname} id={id} onClick={() => {

        if (id === "=") {

            setclickEqual(true)
            if(/^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/.test(value)){

                setValue(eval(value.replace(/[*/+-]+$/, "")))
            } else {
                setValue("Solo decimales o enteros")
            }

        } else if (id === "AC"){
            setValue("")

        } else if (id === "delete") {
            setValue(value.slice(0, -1))

        }else if(classname === "operator"){
            
            setValue(value += id)
            setclickEqual(false)
        } else if(id === "."){

            setValue((value += id).replace(/\.+/g, "."))

        } else if(id === "0") {
            setValue(value += id)

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