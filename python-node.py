#### Execute using the Naked Module ####
# from Naked.toolshed.shell import execute_js

# success = execute_js('script.js')

# if success:
#     print('thumbs!')
# else:
#     print('Woooops!')

#### Execute using the subprocess module ####

from subprocess import call

# Note that you have to specify path to script
call(["node", "script.js"]) 