import React from 'react'
import { Dropdown,Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <MenuItem>
            <Image avatar spaced="rigth" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN15Fc123gzwhYHcZ9fwgqfvSBdvk0uM-0yQ&usqp=CAU"/>
            <Dropdown pointing="top left" text="Burcu">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>   
           </MenuItem>
        </div>
    )
}
