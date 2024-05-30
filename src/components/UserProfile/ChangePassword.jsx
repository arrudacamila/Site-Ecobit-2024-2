import React from 'react'


const ChangePassword = () => {
    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Mudar Senha</h1>

            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Senha Antiga <span>*</span></label>
                    <input type="password"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>Nova Senha <span>*</span></label>
                    <input type="password"
                    />
                </div>


            </div>

            <button className='mainbutton1'

            >Salvar Alterações</button>
        </div>
    )
}

export default ChangePassword