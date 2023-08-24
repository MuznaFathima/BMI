


     function calculateBmi(){


        let height1=document.getElementById('height').value 
        let weight1=document.getElementById('weight').value

        let response=" "

        let bmi=weight1/((height1/100)**2)
        let bmirounded=bmi.toFixed(1)

        if(bmi){

        if(bmi<=18.4){

            response="you are underweight"
        }

       else if(bmi>=18.5&&bmi<=24.9)
        {

            response="your weight is normal"
        }

      else if(bmi>=25.0&&bmi<=39.9){
        response=" you are overweight"

        }

        else{

            response="you are obese"
        }

        let result=`Your BMI is ${bmirounded} and  ${response}`
        

        output.innerHTML=result
    }

    else{
        
       output.innerHTML=`invalid entry`
    }
    
         
     }