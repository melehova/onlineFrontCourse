
bebra = "good bye world!"
print(bebra.capitalize())

lis = ['a', 'b', 'ccc']
lit = ['bubra', 'curwa', 'ccc']

print(lis)

lis[0] = 'u'
lis.append('bre')
dis = lis + lit
lit.append(lis)
print(lis)
print(dis)
print(lit)
lit.pop(1)

print(*bebra.split('o'))
print(lit[2][3])



tup = ("curwa", "tttt", "ppppppop")  # он как будто const
print(tup)

beb = ["a", "b", "t", "5", "gh", "b", "t", "5",]

se = set(beb)
print(se)

dick = {
    0: {
        "beb": "ra",
        "sam": ["bebra", "uuu"]
    },
    1: "bebra2",
    2: "bebra3",
    "curwa": "mat"
}
print(dick, dick["curwa"])