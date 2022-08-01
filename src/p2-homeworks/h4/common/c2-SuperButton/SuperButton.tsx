import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    // const onClickHandler = () => {
    //     {...restProps.onClick()}
    // }
    console.log(restProps)
    return (
        <button
            className={finalClassName}
            {...restProps}
            // onClick={onClickHandler}


            // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
