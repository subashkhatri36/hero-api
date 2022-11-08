const {SuperHero} =require('../Model/superHeroModel');

module.exports = {
    Query: {

        getHerosList: async (parent, args) => {
            
            const result = await SuperHero.findAll();
            if(result===null){
                return {message:"No data found"};
            }
               
        
            return result;

        },
        getHero: async (parent, args) => {
            
            const result = await SuperHero.findByPk(args.id);
            if(result===null){
                return {message:"No data found"};
            }
        
            return result;

        },
        getHerosByName: async (parent, args) => {
            
            const result = await SuperHero.findOne({ where: { name: args.name } });
            if(result===null){
                return {message:"No data found"};
            }
        
            return result;

        }
    },

    Mutation: {
        updateHero: async (parent, args) => {
           
            const result = await SuperHero.update
            (
                {
                    name: args.name,
                    powerstat: args.powerstat,
                    image: args.image,
                    description: args.description
                },
                {
                    where: { id: args.id },
                  })
            return result;
        },
        addHero :  async (parent, args) => {
            const result = await SuperHero.create
            ({
                    name: args.name,
                    powerstat: args.powerstat,
                    image: args.image,
                    description: args.description
                })
            return result;
        },
        deleteHero:  async (parent, args) => {
            try {
                
                await SuperHero.destroy({
                    where: { id: args.id },
                  });
                return true;
            } catch (error) {
                console.log('Error while delete:',error);
                return false;
            }
            
        }
    }
}
