import Link from 'next/link'

const assetPrefix = '/nextjspage';

const Users = () =>{
    return (
        <div>
            <Link href={"${assetPrefix}/"}><a>Back to index</a></Link>
           <h1>THis is User Page. FOR AM</h1>
        </div>

    )
}
export default Users