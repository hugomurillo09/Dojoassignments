def find_char(lis, cha):
	result = []
	for letter in lis:
			if cha in letter:
				result.append(letter)
	print result

lis_o_things = ['hello','world','my','name','is','Anna'] 
cha_r = 'o'

find_char(lis_o_things, cha_r)

