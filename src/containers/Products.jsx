import React, {useState} from 'react'
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/Products.scss';

const API='https://dummyjson.com/products';

function Products() {

  const [elements, setElements] = useState(4)

	const handleChange=(choice)=>{
			setElements(choice.target.value)
	}

	const products = useGetProducts(API);

  return (
    
    <section className="container-fluid my-2">
			<div className="container">
			  <div className="form-floating">
					<select 
							className="form-select" 
							name='selectElements' 
							id="selectElements"
							defaultValue={4} 
							onChange={choice => handleChange(choice)}
					>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="6">6</option>
					</select>
					<label htmlFor="floatingSelect">Cuantos elementos te gustaria tener por fila?</label>
				</div>
			</div>
				
			<div className="container my-2">
				
				<div className="row justify-content-evenly">
					{products.map((product, i)=>(
						<>
						{elements==6 && 
							<div className="col-2 justify-content-center align-self-center" key={`${elements}${i}${product.id}`}>
								<ProductItem product={product} key={`${elements}${product.id}`} />
							</div>
							}
						{elements==4 && 
							<div className="col-3 justify-content-center align-self-center" key={`${elements}${i}${product.id}`}>
								<ProductItem product={product} key={`${elements}${product.id}`} />
							</div>
							}
						{elements==3 && 
							<div className="col-4 justify-content-center align-self-center" key={`${elements}${i}${product.id}`}>
								<ProductItem product={product} key={`${elements}${product.id}`} />
							</div>

							}
						{elements==2 && 
							<div className="col-6 justify-content-center align-self-center" key={`${elements}${i}${product.id}`}>
								<ProductItem product={product} key={`${elements}${product.id}`} />
							</div>
							}
						</>
					))}
				</div>
			</div>
		</section>


  )
}

export default Products