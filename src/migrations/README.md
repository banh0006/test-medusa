# Should install the ts-node to run typescript code directly from the command line. ** ts-node should not include in the production.

# Command to generate the migration file. It will generate the migration file include all the changes we made for all the entities in models folder
npx ts-node ./node_modules/.bin/typeorm migration:generate -n 'file_name'

# Command to run the migration 
npx ts-node ./node_modules/.bin/typeorm migration:run