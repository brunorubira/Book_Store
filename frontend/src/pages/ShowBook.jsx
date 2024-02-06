import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBook = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    // useEffect(() => {
    //     console.log('Dados após setBook:', book);
    //     console.log('book._id:', book._id);
    //     console.log('book completo:', JSON.stringify(book, null, 2));
    // }, [book]);


    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {

                const { data } = response;
                const bookData = data.book ? data.book : data;
                setBook(bookData);
                setLoading(false)

                // console.log(response.data)
                // console.log(book)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []); // Coloque um array vazio aqui

    // console.log('Estado atualizado 2:', book)
    console.log('Estado atualizado 2 com id:', book._id)

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Book</h1>

            {loading ? (<Spinner />) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book._id}</span>

                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{book.title}</span>

                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>

                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                        <span>{book.publishYear}</span>

                    </div>

                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                        <span>{book.createdAt}</span>

                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                        <span>{book.updatedAt}</span>

                    </div>

                </div>
            )}
        </div>
    )
}


export default ShowBook