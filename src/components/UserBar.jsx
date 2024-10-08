import user from '../assets/user.png'

export function UserBar() {
    return (
        <div className='barra'>
            <nav>
                <img src={user} alt="" />
            </nav>
        </div>
    )
}