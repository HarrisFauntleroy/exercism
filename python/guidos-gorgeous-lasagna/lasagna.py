EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(actual_minutes_in_oven):
    """
    Calculate the baking time remaining.

    :param actual_minutes_in_oven: int - The number of minutes the lasagna has been baking in the oven.
    :return: int - The number of minutes remaining to bake the lasagna.

    This function takes the actual number of minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - actual_minutes_in_oven

def preparation_time_in_minutes(layers):
    """
    Calculate the preparation time in minutes.

    :param layers: int - The number of layers in the lasagna.
    :return: int - The total preparation time in minutes.

    This function takes the number of layers in the lasagna as an argument and returns
    how many minutes you would spend preparing them. Each layer takes `PREPARATION_TIME` minutes to prepare.
    """
    return layers * PREPARATION_TIME

def elapsed_time_in_minutes(layers, actual_minutes_in_oven):
    """
    Calculate the total elapsed cooking time.

    :param layers: int - The number of layers in the lasagna.
    :param actual_minutes_in_oven: int - The number of minutes the lasagna has been baking in the oven.
    :return: int - The total number of minutes you've been cooking.

    This function takes two arguments:
      - The number of layers in the lasagna
      - The number of minutes the lasagna has been baking in the oven

    It returns the total number of minutes you've been cooking, which is the sum of
    your preparation time and the time the lasagna has already spent baking in the oven.
    """
    return preparation_time_in_minutes(layers) + actual_minutes_in_oven