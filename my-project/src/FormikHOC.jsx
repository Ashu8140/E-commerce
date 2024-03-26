import { useField } from "formik";

function FormikHOC(IncomingComponent){
    function OutGoingComponent({ id, name,label,...rest}){
    

            const field=useField(name);
            const [data,meta]=field;
            const {onChange,onBlur,}=data;
            const {touched,errors,value}=meta
        
            
    return (
    <div>
         <IncomingComponent
         id={id}
         name={name}
         label={label}
         onBlur={onBlur}
         onChange={onChange}
         touched={touched}
         error={errors}
         {...rest}
         />
        </div>
    )
    }
    return OutGoingComponent;
}
export default FormikHOC;