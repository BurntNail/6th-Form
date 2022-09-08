from math import floor, log10

def round_to_dp (x, decimals):
    return round(x, decimals)

wked = True
start = input("Input Start: ")
end = input("Input End: ")
try:
    start = start.split(",")
    end = end.split(",")

    x1 = int(start[0])
    y1 = int(start[1])
    x2 = int(end[0])
    y2 = int(end[1])
except ValueError as e:
    print("Error parsing:", e)
    wked = False

if wked:
    print("(", x1, ", ", y1, ") -> (", x2, ", ", y2, ")", sep="")

    m = (y2 - y1) / (x2 - x1)
    c = y1 - (m * x1)

    print("y = ", round_to_dp(m, 3), "x + ", round_to_dp(c, 3), sep="")