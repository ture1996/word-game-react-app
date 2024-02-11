import './PersonalInfo.css';

export const PersonalInfoDetails = ({
    userData,
    deleteAccount,
    changeNickName,
    changeHandler,
    newNickName,
    isChangeable,
    permitNickToChange,
}) => {

    return (
        <div className='personal-info'>
            {
                userData &&
                <>
                    <div className='col'>
                        <div className='row right-border'>
                            First name
                        </div>
                        <div className='row'>
                            {userData.first_name}
                        </div>
                    </div >
                    <div className='col'>
                        <div className='row right-border'>
                            Last name
                        </div>
                        <div className='row'>
                            {userData.last_name}
                        </div>
                    </div >
                    <div className='col'>
                        {isChangeable
                            ?
                            <form className="col" onSubmit={changeNickName}>
                                <input className='row'
                                    required
                                    type="text"
                                    name="nick_name"
                                    value={newNickName}
                                    onChange={changeHandler}
                                    placeholder='Enter new nick here'
                                />
                                <button className="nav-button row" type="submit">
                                    Change
                                </button>
                            </form>
                            :
                            <div className='col'>
                                <div className='row right-border'>
                                    Nick name
                                </div>
                                <div className='row'>
                                    {userData.nick_name}
                                </div>
                            </div>
                        }
                        <button className='nav-button row' onClick={() => permitNickToChange()}>
                            {isChangeable ? "Stop changing nick name" : "Change nick name"}
                        </button>
                    </div>
                    <div className='col'>
                        <div className='row right-border'>
                            Personal best
                        </div>
                        <div className='row'>
                            {userData.personal_best}
                        </div>
                    </div >
                    <button
                        className='nav-button align-right'
                        type="button"
                        onClick={() => deleteAccount()}
                    >
                        Delete account
                    </button>
                </>
            }
        </div>
    )


}