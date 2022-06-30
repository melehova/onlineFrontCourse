import { useEffect, useState } from 'react'
import './mainBlock.css'

const MainBlock = ({ clickButtonFunc, content, display, color }) => {

    const blog = [
        {
            key: 0,
            title: 'AAA',
            author: 'Valentin',
            date: '03.03.03'
        },
        {
            key: 1,
            title: 'vvv',
            author: 'Valentin',
            date: '03.03.03'
        },
        {
            key: 2,
            title: 'AdfdfAA',
            author: 'dfsdf',
            date: '03.03.03'
        },
        {
            key: 3,
            title: 'efsef',
            author: 'Valefdgdfgfgntin',
            date: '03.03.03'
        }
    ]

    const addPost = {
        title: 'efsef',
        author: 'Valefdgdfgfgntin',
        date: '03.03.03'
    }

    const [number, setNumber] = useState(blog.length)
    const [posts, setPosts] = useState(blog)


    // const divRef = document.getElementById('beb').createRef()

    useEffect(() => {
        const newBlog = [...blog]
        newBlog[2].title = document.getElementById('textInput').value
        // if (names.includes('oleh')) {
        //     newBlog[2].title = 'ooo'
        // }
        setPosts(newBlog)

        document.getElementById('beb').innerText = document.getElementById('textInput').value
        // divRef.ariaCurrent.innerText = document.getElementById('textInput').value
        // setPosts([...posts, addPost]) 
        // blog.push(addPost)
    }, [number])

    /// при любом изменении
    // useEffect(() => {
    //     setPosts([...posts, addPost])
    //     blog.push(addPost)
    // })


    /// только при первоначайной загрузке страницы

    // useEffect(() => {
    //     setPosts([...posts, addPost])
    //     blog.push(addPost)
    // }, [])  

    if (!display) {
        return ''
    }
    const plusNumber = () => {
        setNumber(number + 1)
    }
    const minusNumber = () => {
        setNumber(Math.max(number - 1, 0))
    }

    return (
        <div className={`main-block ${color = 'red' ? 'red' : ''}`}>
            <div className='container' style={{ borderBottom: '5px solid blue', borderTop: '2px dashed yellow' }}>
                Main block {content} {number}
                <div onClick={plusNumber}>+</div>
                <div>{number}</div>
                <div onClick={minusNumber}>-</div>
                <button onClick={clickButtonFunc}>aaaaaa</button>
            </div>
            <input type="text" id="textInput"></input>
            {/* <div id='beb' ref={divRef}></div> */}
            <div id='beb'></div>


            {
                blog.map(({ key, title, author }) => {
                    return <div key={key}>{title} - {author}</div>
                })
            }
        </div>
    )
}

export default MainBlock