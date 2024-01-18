
const aValidString = (string) => {
    const regex = new RegExp("^[A-Za-z ]+$");
    return regex.test(string);
}

const aValidStringLength = (string, minLength, maxLength) =>{
    let output = [false,-1];
    if(string.length < minLength){
        output[1] = minLength;
    }else if(string.length > maxLength){
        output[1] = maxLength;
    }else{
        output[0] = true;
    }

    return output;
}

const isInt = num => Number.isInteger(num);

const isPositive = num => num >= 0;

const saveProduct_local = product =>{
    const initialValue = localStorage.getItem("products");
    if (initialValue) {
        const oldValues = JSON.parse(initialValue);

        const newProducts = [ ...oldValues, product ];
        const stgArrayValues = JSON.stringify(newProducts);
        localStorage.setItem("products", stgArrayValues);
        
    } else {
        const firstProduct = JSON.stringify([product]);
        localStorage.setItem("products", firstProduct);
    }

    alert("Producto guardado de forma local exitosamente");
}


const onSubmit = e =>{
    e.preventDefault()
    let valid_form = true;

    const err_message = document.getElementById("err-message");
    const name = document.getElementById("product-name");
    const price = document.getElementById("product-price");
    const stock = document.getElementById("product-stock");
    const brand = document.getElementById("product-brand");
    const category = document.getElementById("product-category");
    const description_st = document.getElementById("product-description-st");
    const description_lg = document.getElementById("product-description-lg");
    const shipping_free = document.getElementById("product-shipping-free");
    const min_age = document.getElementById("min-age");
    const max_age = document.getElementById("max-age");
    const img = document.getElementById("product-image");

    //console.log(aValidStringLength(name.value, 3, 15)[0]);


    //--- nombre --- obl
    if(aValidString(name.value)){
        const validLength = aValidStringLength(name.value, 3, 30);
        if (!validLength[0]) {
            if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            err_message.innerHTML = "(*) El nombre debe tener entre 3 y 30 caracteres";
            name.setAttribute("aria-invalid", "true");

            valid_form = false;
        
        }else {
            if (err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            name.removeAttribute("aria-invalid");
        }  

    }else{
        if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        err_message.innerHTML = "(*) El nombre solo permite caracteres alfabeticos";
        name.setAttribute("aria-invalid", "true");

        valid_form = false;
    }
    

    //--- merca ---
    if (brand.value) {
        if(aValidString(brand.value)){
            const validLength = aValidStringLength(brand.value, 2, 15);
            if (!validLength[0]) {
                if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
                err_message.innerHTML = "(*) La marca debe tener entre 2 y 15 caracteres";
                brand.setAttribute("aria-invalid", "true");

                valid_form = false;
            
            }else{
                if (err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
                brand.removeAttribute("aria-invalid");
            }  
    
        }else{
            if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            err_message.innerHTML = "(*) La marca solo permite caracteres alfabeticos";
            brand.setAttribute("aria-invalid", "true");

            valid_form = false;
        }
        
    }


    //--- categoria ---obl
    if(aValidString(category.value)){
        const validLength = aValidStringLength(category.value, 1, 15);
        if (!validLength[0]) {
            if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            err_message.innerHTML = "(*) La categoria debe tener entre 1 y 15 caracteres";
            category.setAttribute("aria-invalid", "true");

            valid_form = false;
        
        }else {
            if (err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            category.removeAttribute("aria-invalid");

        }  

    }else{
        if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        err_message.innerHTML = "(*) La categoria solo permite caracteres alfabeticos";
        category.setAttribute("aria-invalid", "true");

        valid_form = false;
    }


    //--- descripcion corta --- obl
    if(aValidString(description_st.value)){
        const validLength = aValidStringLength(description_st.value, 10, 120);
        if (!validLength[0]) {
            if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            err_message.innerHTML = "(*) La descripcion corta debe tener entre 10 y 120 caracteres";
            description_st.setAttribute("aria-invalid", "true");

            valid_form = false;
        
        }else{
            if (err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            description_st.removeAttribute("aria-invalid");
        }  

    }else{
        if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        err_message.innerHTML = "(*) La descripcion corta solo permite caracteres alfabeticos";
        description_st.setAttribute("aria-invalid", "true");

        valid_form = false;
    }
    
    
    //--- precio --- obl
    const priceInt = parseInt(price.value);
    if (!isPositive(priceInt)) {
        if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        err_message.innerHTML = "(*) El precio debe ser un numero positivo";
        price.setAttribute("aria-invalid", "true");

        valid_form = false;
        
    }else {
        if (err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        price.removeAttribute("aria-invalid");
        
    }
    

    //--- stock --- obl
    const stockInt = parseInt(stock.value);
    if (!isPositive(stockInt)) {
        if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        err_message.innerHTML = "(*) El stock debe ser un numero positivo";
        stock.setAttribute("aria-invalid", "true");

        valid_form = false;

    }else {
        if (err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
        stock.removeAttribute("aria-invalid");

    }
    

    //--- edad minima ---
    if(min_age.value){
        const min_age_int = parseInt(min_age.value);
        if (isInt(min_age_int)) {
            if (isPositive(min_age_int)) {
                if (err_message.classList.contains("input-msg-error")){
                    err_message.classList.toggle("input-msg-error");
                    min_age.removeAttribute("aria-invalid");
                }
                
            }else{
                if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
                err_message.innerHTML = "(*) La edad solo admite valores positivos";
                min_age.setAttribute("aria-invalid", "true");

                valid_form = false;
            }
    
        }else{ 
            if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            err_message.innerHTML = "(*) La edad solo admite valores enteros";
            min_age.setAttribute("aria-invalid", "true");

            valid_form = false;
        }
    }

    //--- edad maxima---
    if (max_age.value) {
        const max_age_int = parseInt(max_age.value);
        if (isInt(max_age_int)) {
            if (isPositive(max_age_int)) {
                if(max_age_int > min_age.value){
                    if (err_message.classList.contains("input-msg-error")){
                        err_message.classList.toggle("input-msg-error");
                        max_age.removeAttribute("aria-invalid");
                    }
    
                }else{
                    if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
                    err_message.innerHTML = "(*) La edad maxima debe ser mayor a la minima";
                    max_age.setAttribute("aria-invalid", "true");

                    valid_form = false;
                }
                
            }else{
                if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
                err_message.innerHTML = "(*) La edad solo admite valores positivos";
                max_age.setAttribute("aria-invalid", "true");

                valid_form = false;
            }
    
        }else{ 
            if (!err_message.classList.contains("input-msg-error")) err_message.classList.toggle("input-msg-error");
            err_message.innerHTML = "(*) La edad solo admite valores enteros";
            max_age.setAttribute("aria-invalid", "true");

            valid_form = false;
        }
    }

    //console.log(valid_form);

    if (valid_form) {
        const newProduct = {
            name: name.value,
            price: parseFloat(price.value),
            stock: parseInt(stock.value),
            brand: brand.value,
            category: category.value,
            short_desc: description_st.value,
            long_desc: description_lg.value,
            free_shipping: shipping_free.checked,
            min_age: min_age.value === "" ? "" : parseInt(min_age.value),
            max_age: max_age.value === "" ? "" : parseInt(max_age.value),
            image: img.value,
        }
    }

    saveProduct_local(newProduct);

}