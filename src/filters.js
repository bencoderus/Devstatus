import Vue from "vue";
import moment from "moment";


//formatdate
Vue.filter("formatdate", date => {
  return moment(date).format("MMMM Do, YYYY");
});


//devstatus
Vue.filter("status", function(value) {
  if (value < 20) {
    return "Upcoming Open Source Engineer";
  } else if (value >= 20 && value < 50) {
    return "Junior Open Source Engineer";
  } else if (value >= 50) {
    return "Senior Open Source Engineer";
  } else {
    return "Invalid";
  }
});


//Check null values
Vue.filter('checknull', (data)=>{
    if(!data){
    return "Not provided";
    }
    else{
        return data;
    }
    })


    
//Check null values
Vue.filter('checknull2', (data)=>{
    if(!data){
    return "About Developer";
    }
    else{
        return data;
    }
    })
