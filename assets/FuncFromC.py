from math import floor, log10

def round_to_dp (x, decimals):
    return round(x, decimals)

start = input("Input Start ").split(",")
end = input("Input End ").split(",")

x1 = int(start[0])
y1 = int(start[1])
x2 = int(end[0])
y2 = int(end[1])

print("(", x1, ", ", y1, ") -> (", x2, ", ", y2, ")", sep="")

m = (y2 - y1) / (x2 - x1)
c = y1 - (m * x1)

print("y = ", round_to_dp(m, 3), "x + ", round_to_dp(c, 3), sep="")