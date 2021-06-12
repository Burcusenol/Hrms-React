import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
           <Menu.Item>
            <Button onClick={signIn} basic inverted color='violet'>Giriş Yap</Button>
            <Button basic inverted color='violet' style={{marginLeft:'0.5em'}}>Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}
