import '../Styles/Left.css';
function LeftComponent() {
    return (
        <div className='container-fluid w-100 mainContanier'>
            <div className='col-md-12'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-9 leftSection'>
                        <div></div>
                        <div>
                            <h2>Body Mass Index Calculator</h2>
                            <p><small>Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valueable starting point to elevate your overall health and well-being.</small>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-1'></div>


                </div>

            </div>
        </div>
    )
}

export default LeftComponent
