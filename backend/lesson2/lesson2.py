def line():
    print('-'*20)



# s = 'a'
# r = 't'

# s, r = r, s
# print(s, r)

# g = ["a", 'b', 'c', 'kuku', 'curwa']

# k = g
# g[0] = 'e'

# print(k)

# beb = 5
# if beb > 2:
#     print('beb is more than 2')

# e = 'bebr'
# if e == 'bebra':
#     print('bebra is bebra')
# elif e == 'bebr':
#     print('bebr is bebr')
# else:
#     print('eeeeeeeeeeeeeeeeeee')

# text_list = [2,4,5,8,7,9,4,5,6,5,5,4,8]
# total_sum = 0

# for w in text_list:
#     if w > 5:
#         total_sum += w
#         print("More than 5 =", w)
#     else:
#         print('Less or equal 5 =', w)
        
# print(total_sum)
# for a in g:
#     print(a)
# line()

# print(10 > 7)
# line()

# i = 0
# while i < 10:
#     print(i)
#     i += 1
#     if i == 8:
#         break
#     if i == 2:
#         continue
# line()
x = [
    [2,5,],
    [8,6,]
]

sum = 0
for y in x:
    for u in y:
        sum += u
print(sum)


dick = {
    'name': 'veroika',
    'age': 18,
    'alive': True,
    'bebra': 'of course'
}

for h in dick.values():
    print(h)

for h in dick.keys():
    print(h)

transactions = {
    1:{
        'add': True,
        'sum': 2,
        'person': {
            'name': 'Petro'
        }
    },
    2:{
        'add': True,
        'sum': 2,
        'person': {
            'name': 'Petro',
            'male': True
        }
    }
}

total_amount = 0
for transaction in transactions.values():
    if transaction['add'] and 'male' in transaction['person'].keys():
        total_amount += transaction['sum']