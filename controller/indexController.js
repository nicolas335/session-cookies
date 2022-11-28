const {validationResult} = require('express-validator');

module.exports = {
    index : (req, res) => {
        return res.render('index', {
            title: 'Colorin, colorado'
        })
    },
    color : (req, res) => {
        const errors = validationResult(req);
           
              if (errors.isEmpty()) {
                  const {name, color, email, age, remember} = req.body; 
                
                  req.session.bgColor = color;
                  res.locals.bgColor = req.session.bgColor;

                  if(remember){
                      res.cookie('bgColor', req.session.bgColor, {maxAge: 1000 * 60})
                  }

                  return res.render('index', {
                      name, 
                      color,                       
                      email, 
                      age
                    })

              } else {
                  return res.render('index',{
                    old: req.body,
                    errors: errors.mapped()
                  })
        }     
    },
    logout : (req, res) =>{
        res.render('logout')
    },
    
    destroy: (req, res) => {
       
        req.session.destroy();
        res.cookie('bgColor', null, {maxAge: -1})
        res.redirect('/')
    } 
      
    }   


