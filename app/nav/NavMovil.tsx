import VsCode from '@/app/layout/vscode/index'
import Settings from '@/app/layout/setting/index'
import Safari from '@/app/layout/safari/index'
import Notes from '@/app/layout/notes/index'
import Discord from '@/app/layout/discord/index'
import Console from '@/app/layout/console/index'
import Chrome from '@/app/layout/chrome/index'

import './NavMovil.css'

export default function Home() {
    return (
        <div>
            <div className='content-nav-icon-movil'>
                <VsCode/>
                <Settings/>
                <Safari/>
                <Notes/>
                <Discord/>
                <Console/>
                <Chrome/>
            </div>
            <div>
                <div className='content-nav-barra-movil'></div>
            </div>
        </div>
    )
}
