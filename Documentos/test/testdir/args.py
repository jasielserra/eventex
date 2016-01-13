import sys

print sys.argv[1:]

for arg in sys.argv:
    print arg

if not len(sys.argv[1:]):
    print "It's takes no paremeters."
