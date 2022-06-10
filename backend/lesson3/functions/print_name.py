def print_name(name = 'Bebras'):
    print("Hello", name)


def print_names(name = 'Bebras', *names, **more_names):
    print("Hello", name)
    # print(more_names)

    for nam in names:
        print("GOODBYE", nam)
    print('-' * 20)
    for nam, surname in more_names.items():
        print(f'good night {nam} {surname}')

# args kwargs